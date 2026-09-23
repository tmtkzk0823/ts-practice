let box: { width: number; hight: number };
box = { width: 100, hight: 200 };

// エイリアス
type Box = { width: number; hight: number };
let aliasesBox: Box = { width: 300, hight: 500 };

console.log(aliasesBox);
