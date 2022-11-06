import{groupOfCompanies} from "./company.js";

groupOfCompanies.map((item,i)=>{
    let companiesShow=`Company Name is ${item.name} and rank number ${item.rank}`;
    console.log(companiesShow);
})
