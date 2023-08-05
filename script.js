const inputTag = document.getElementsByClassName("form-control")[0];
const itemListTag = document.getElementsByClassName("itemListContainer")[0];

let productId = 1
const handleChange = (event) => {
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    
    const parentTag = document.createElement("div");
    parentTag.classList.add("productName");
    parentTag.addEventListener("click", () => {
        const purchased = parentTag.classList.contains("purchased");
        if (purchased) {
            parentTag.classList.remove("purchased");
        } else {
            parentTag.classList.add("purchased");
        }
    });

    const spanTag = document.createElement("span");
    spanTag.id = productId;

    const product = productId.toString() + ". " + inputValue;
    const trash = document.createElement("i");
    trash.classList.add("fa-regular", "fa-trash-can");
    trash.addEventListener("click", () => {
        productContainer.remove();
    });

    spanTag.append(product);
    parentTag.append(spanTag);
    productContainer.append(parentTag, trash);
    itemListTag.append(productContainer);
    inputTag.value = "";
    productId += 1;
};

inputTag.addEventListener("change", handleChange);