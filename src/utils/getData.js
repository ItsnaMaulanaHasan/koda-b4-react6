export const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (e) {
    console.log("Gagal mendapatkan data: " + e);
  }
};
