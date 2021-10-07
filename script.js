// THIS IS FUNCTION FOR MILESTONE 1-4 (read README.md)
// function sumFibs(num) {
//     let firstElem = 0, secondElem = 1, nextElem; 
//     for (let i=1; i<num; i++) {
//         nextElem = firstElem + secondElem;
//         firstElem = secondElem;
//         secondElem = nextElem;
//     }  
//     return nextElem;
//   }

// function getInputValue() {
//     let inputVal = document.getElementById("inputNumber").value;
//     document.getElementById("result").innerHTML = sumFibs(inputVal);
//   }
let resultList = document.querySelector('#resultList')
const searchButton = document.getElementById('searchButton');
const result = document.getElementById('result');
const resultSpinner = document.querySelector('#resultSpinner')

const log = console.log
function fetchData() {
  searchButton.addEventListener(
      'click', (search = (searchValue) => {
          result.innerHTML = '';
          document.querySelector(".sp-circle").style.display = 'block';          
          searchValue = document.querySelector('#inputNumber').value;
          const number = searchValue;
          const alert = document.querySelector('.alert')
      
          if (number>50 || number<=0){
            alert.innerHTML = 'Choose number from 1 to 50'
            alert.classList.remove('d-none');
            document.querySelector(".sp-circle").style.display = 'none';
          }
          else if (!Number.isInteger(Number(number))) {   
            alert.innerHTML = "Put number from 1 to 50 only!" 
            alert.classList.remove('d-none');
            document.querySelector(".sp-circle").style.display = 'none';
          } 
          else if (0<number<=50) {
            resultList.innerHTML = ''
            document.querySelector('.alert').classList.add('d-none');
            const url = `http://127.0.0.1:5050/fibonacci/${number}`
            fetch(url)
            .then(response => {
                if (response.status === 400) {
                  result.innerHTML = 'Server Error: 42 is the meaning of life';
                  result.style.color = 'red';
                  document.querySelector(".sp-circle").style.display = 'none';
                }
                return response.json();
            })
            .then(data => {
              resultSpinner.style.display = 'block';
              // set timeout for spinner to desappear and show current result latest search(includes current input)
              setTimeout(function() {
                result.innerHTML = `${data.result}`; 
                document.querySelector(".sp-circle").style.display = 'none';
                result.style.color = 'black';
                // call func() that shows 3 latest search
                
                resultList.innerHTML = ''
                loadResult()
              }, 1000)  
            })
          }
      })
  )}
fetchData()

window.onload = setTimeout(loadResult,2000)



function loadResult() {
  const url2 = 'http://localhost:5050/getFibonacciResults'
  
  resultSpinner.style.display = 'none';
  fetch(url2).then(r => {
    return r.json();
  }).then(data => {
    let newObj = Object.assign({}, data);
    let newArr =   newObj.results
    newArr.sort(sortByDate)
    for (let i=0; i<3; i++) {   
      let jDate = new Date(newArr[i].createdDate)  
      const resultElement = `<p class="lastSearch">
      The Fibonacci of <b>${newArr[i].number}</b> is <b>${newArr[i].result}</b> Calculated at: ${jDate}
    </p>`
      resultList.insertAdjacentHTML("beforeend", resultElement)
      
    }
  })
}

// sort array by latest date
function sortByDate(a,b){
  return new Date(b.createdDate).valueOf() - new Date(a.createdDate).valueOf();
}

