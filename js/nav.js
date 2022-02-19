const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <!-- 
    navbar
    -->
    <div class="header">
      <a href="#default" class="logo">HOMEMART</a>
      <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="men.html">MEN</a>
        <a href="women.html">WOMEN</a>
        <a href="kid.html">KIDS</a>
        <a href="beauty.html">BEAUTY</a>
        <a href="accessories.html">ACCESSORIES</a>
        <a href="login.html">LOGIN</a>
        
      </div>
    </div>
        
    `;
}

createNav();