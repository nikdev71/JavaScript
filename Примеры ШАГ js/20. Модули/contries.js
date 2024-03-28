try {
    const response = await fetch("./countries.json");
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.log(error)
  }