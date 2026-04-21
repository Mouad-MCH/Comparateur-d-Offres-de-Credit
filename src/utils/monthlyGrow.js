


export const monthlyGrow = (years, amount, rate) => {
    const arr = [];
    let newAmount = amount;
    for(let i = 1; i<=years; i++)  {
        const obj = {
            year: i,
            interets: newAmount * rate,
            total: (newAmount * rate) + newAmount
        }

        newAmount = obj.total;
        arr.push(obj);
    }

    return arr
}

// console.log(monthlyGrow(5, 10000, 0.01))