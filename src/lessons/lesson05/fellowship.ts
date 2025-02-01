
interface IHero{
  id:number
  name:string
  age:number
  isDark:boolean
  weapons:string[]
  image:string

}

export const fellowship:IHero[] = [
  {
    id: 1,
    name: "Gendalf",
    age: 2000,
    isDark: false,
    weapons: ["magic sword", "magic staff"],
    image:
      "https://fotoblik.ru/wp-content/uploads/2023/09/vlastelin-kolets-dve-kreposti-gendalf-2.webp",
  },
  {
    id: 2,
    name: "Saruman",
    age: 1800,
    isDark: true,
    weapons: ["palantir"],
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/08/Christopher-Lee-as-Saruman-in-The-Hobbit.jpg",
  },
  {
    id: 3,
    name: "Frodo",
    age: 35,
    isDark: false,
    weapons: ["ring"],
    image:
      "https://masterpiecer-images.s3.yandex.net/814a654c6e3e11eebd65b646b2a0ffc1:upscaled",
  },
  {
    id: 4,
    name: "Gimli",
    age: 50,
    isDark: false,
    weapons: ["axe"],
    image:
      "https://www.mundodeportivo.com/alfabeta/hero/2024/08/picsart_24-08-04_12-43-06-233.jpg?width=768&aspect_ratio=16:9&format=nowebp",
  },
  {
    id: 5,
    name: "Arwen",
    age: 1000,
    isDark: false,
    weapons: [],
    image:
      "https://avatars.dzeninfra.ru/get-zen_doc/3415135/pub_5fe12278285e983e574aebca_5fe5f87d0d0c7759ac6b9e74/scale_1200",
  },
  {
    id: 6,
    name: "Gorlum",
    age: 200,
    isDark: true,
    weapons: ["teeth ", "hands ", "rocks"],
    image:
      "https://www.easypeasybooks.de/wp-content/uploads/2022/08/gollum-herr-der-ringe.jpeg",
  },
];

// const newfellowship = fellowship.map(hero => {
//     console.log(`${hero.name} is ${hero.age}`);
//     return `${hero.name} is ${hero.age}`
// })

// console.log(newfellowship);
