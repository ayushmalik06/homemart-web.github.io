const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
        <img src="img/logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="login.html"><img src="img/user.png" alt=""></a>
                <a href="whislist.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="men.html" class="link">MEN</a></li>
            <li class="link-item"><a href="women.html" class="link">WOMEN</a></li>
            <li class="link-item"><a href="kid.html" class="link">KIDS</a></li>
            <li class="link-item"><a href="beauty.html" class="link">BEAUTY</a></li>
            <li class="link-item"><a href="accessories.html" class="link">ACCESSORIES</a></li>
        </ul>
    `;
}

createNav();