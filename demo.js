var greet = function (str) {
    return "Hello ".concat(str, ", Good Morning !");
};
console.log(greet("sanjeev"));
var showRole = function (data) {
    var info = {
        name: data.name,
        email: data.email,
        isAdmin: data.isAdmin,
    };
    //   const { name, email, isAdmin } = info;
    //   return { name, email, isAdmin };
    //   return info.name;
    return info;
};
var infoData = {
    id: 1,
    name: "sanjeev",
    email: "sanjeev@gmail.com",
    isAdmin: true,
};
console.log(showRole(infoData));
