const greet = (str: string): string => {
  return `Hello ${str}, Good Morning !`;
};

console.log(greet("sanjeev"));
// const sumTwo = (data: { num1: number; num2: number; num3?: number }) => {
//   return data.num1 + data.num2 + (data.num3 || 0);
// };

// type
type data = {
  num1: number;
  num2: number;
  num3: number;
};

// const sumTwo = (data: data) => {
//   return data.num1 + data.num2 + (data.num3 || 0);
// };

// console.log(sumTwo({ num1: 5, num2: 2, num3: 5 }));

interface user {
  id: 1;
  name: string;
  email: string;
}

interface admin extends user {
  isAdmin: true;
}

const showRole = (data: admin): object => {
  const info = {
    name: data.name,
    email: data.email,
    isAdmin: data.isAdmin,
  };
  //   const { name, email, isAdmin } = info;
  //   return { name, email, isAdmin };
  //   return info.name;
  return info;
};

const infoData: admin = {
  id: 1,
  name: "sanjeev",
  email: "sanjeev@gmail.com",
  isAdmin: true,
};

console.log(showRole(infoData));
