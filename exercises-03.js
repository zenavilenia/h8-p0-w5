function highestScore (students) {
  let hasil = {};
  let namaKelas = [];

  for(let i in students) {
    if(!(namaKelas.includes(students[i].class))) {
      namaKelas.push(students[i].class);
    }
  }

  for(let j in namaKelas) {
    let tampung = 0;
    let index = -1;
    for(let k in students) {
      if(students[k].class === namaKelas[j]) {
        if(students[k].score > tampung) {
          tampung = students[k].score;
          index = k;
        }
      }
    }

    hasil[namaKelas[j]] = {
      name: students[index].name,
      score: students[index].score
    };
  }
  return hasil;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
