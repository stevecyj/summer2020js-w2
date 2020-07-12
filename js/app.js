let productData = {
  data: {
    uuid: "5bffb293-5936-4139-961e-e2006317c701",
    apiPath: "https://course-ec-api.hexschool.io/",
    products: [],
  },

  getData() {
    let vm = this;
    let api = `${vm.data.apiPath}/api/${vm.data.uuid}/ec/products`;
    axios.get(api).then(function (res) {
      vm.data.products = res.data.data;
      vm.render();
    });
  },
  render() {
    let vm = this;
    let productList = document.querySelector("#productList");
    let products = vm.data.products;
    console.log(products);
    let str = "";
    products.forEach(function (item) {
      str += `<li>
                <div class="image">
                  <a href="#"
                    ><img src="${item.imageUrl[0]}" alt=""
                  /></a>
                </div>
                <p >
                  <span class="shoe-style"><span style="color:#333;">鞋款</span>:<a href="#">${item.title}</span></a><br />
                  鞋類 : <span>${item.category}</span><br />
                <p class="price">
                  售價: <strong>NT$ ${item.price}</strong>
                </p>
              </li>`;
    });
    productList.innerHTML = str;
  },
};

productData.getData();

let $loading = $(".load-wrapp");
$(window).on("load", function () {
  $(".load-wrapp").fadeOut("slow");
});
