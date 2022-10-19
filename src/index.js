console.log(data);

// WRITE YOUR CODE BELOW!
const dogsList = document.querySelector(".dogs-list")
const main = document.querySelector(".main")


data.forEach((dog)=>{
    const li = document.createElement("li")
    li.classList.add("dogs-list__button")
    li.innerText = dog.name
    dogsList.append(li)

    li.addEventListener('click', (e)=>{
        const dogHtml = dogCard(dog)
        main.innerHTML = dogHtml
    })
})

function dogCard(dog){

    return `
        <section class="main__dog-section">
            <h2>${dog.name}</h2>
            <img
                src=${dog.image}
                alt=${dog.name}
            />
            <div class="main__dog-section__desc">
                <h3>Bio</h3>
                <p>
                    ${dog.bio}
                </p>
            </div class="main__dog-section__btn">
            <p><em>Is naughty?</em> yes!</p>
            <button>Good dog!</button>
        </section>

    `
}