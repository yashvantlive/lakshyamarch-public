export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

export async function getLatestYouTubeVideos(maxResults = 5): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.error("Missing YouTube API credentials");
    return [];
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`;
    
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error(`YouTube API error: ${res.status}`);
    }

    const data = await res.json();

    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      // Decode HTML entities in title
      thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}

export function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  const months = Math.floor(diffInSeconds / 2592000);
  if (months < 12) return `${months} mo ago`;
  
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

export async function getAllYouTubeVideos(maxPages = 3): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.error("Missing YouTube API credentials");
    return [];
  }

  let allVideos: YouTubeVideo[] = [];
  let pageToken = "";
  let pagesFetched = 0;

  try {
    while (pagesFetched < maxPages) {
      const pageTokenParam = pageToken ? `&pageToken=${pageToken}` : "";
      const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50&type=video${pageTokenParam}`;
      
      const res = await fetch(url, { next: { revalidate: 604800 } }); // 1 week cache
      if (!res.ok) {
        throw new Error(`YouTube API error: ${res.status}`);
      }

      const data = await res.json();
      
      const mappedVideos = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
        publishedAt: item.snippet.publishedAt,
      }));
      
      allVideos = [...allVideos, ...mappedVideos];
      
      if (!data.nextPageToken) break;
      pageToken = data.nextPageToken;
      pagesFetched++;
    }

    return allVideos;
  } catch (error) {
    console.error("Error fetching ALL YouTube videos:", error);
    return allVideos; // return whatever we managed to fetch
  }
}
