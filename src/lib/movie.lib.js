export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};

export async function getSearchMovie(input) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`,
      options
    );

    const data = await response.json();
    return {results: data.results, total_movies: data.total_results, total_page: data.total_pages};
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

export async function getMoreMovie(input, page) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=${page}`;

    const response = await fetch(url, options);

    const data = await response.json();
    console.log(data);

    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

export async function getDetailMovie(id) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const response = await fetch(url, options);

    if (response.status === 404) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching detail:', error);
    throw error;
  }
}

export async function getSimiliarMovie(id) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar `, options);

    const data = await response.json();

    if (!data.success) {
      return {results: data.results.slice(0, 5)};
    } else {
      return {results: []};
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}
