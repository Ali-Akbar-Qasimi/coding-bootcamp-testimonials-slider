
let data = [
    {
        body: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        name: 'Tanya Sinclair',
        career: "UX Engineer",
        src: "./images/image-tanya.jpg"
    },
    {
        body: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        name: 'John Tarkpor',
        career: "Junior Front-end Developer",
        src: "./images/image-john.jpg"
    },
]
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let body = document.querySelector('.body')
let name = document.querySelector('.name')
let career = document.querySelector('.career')
let image = document.querySelector('.img')
let index = 0
function slide(){
    image.src = data[index].src
    body.textContent = data[index].body
    name.textContent = data[index].name
    career.textContent = data[index].career
}
prev.addEventListener('click',()=>{
    index--
    if(index === -1){
        index = 1
    }
    slide()
})
next.addEventListener('click',()=>{
    index++
    if(index === 2){
        index = 0
    }
    slide()
})
slide()