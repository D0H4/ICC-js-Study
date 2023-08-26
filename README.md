# Week 8 숙제

```
const getMovies = movieName =>{
	return new Promise((resolve, reject) => {
		fetch(`http://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
			.then(res => res.json())
			.then(res => {
				console.log(res)
				if(res.Response === 'False'){
					reject(res.Error)
				}
				resolve(res)
	})
	})
}

const wrap = async () => {
  try {
    await getMovies('avengers')
  }
  catch(error) {
    console.log("에러 발생: ", error)
  }
}

wrap()
```