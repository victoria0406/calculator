import { calculator } from './reducer';


/*일반적인 jest의 test방법*/
test("1 + 2 = 3", ()=>{
    expect(calculator("1+2")).toBe(3);
})

test("1 - 2 = -1", ()=>{
    expect(calculator("1-2")).toBe(-1);
})

test("1 - 2 + 2 = 1", ()=>{
    expect(calculator("1-2+2")).toBe(1);
})

test("3 x 2 = 6", ()=>{
    expect(calculator("3x2")).toBe(6);
})

test("3 / 2 = 1.5", ()=>{
    expect(calculator("3/2")).toBe(1.5);
})
test("3 x 2 + 1 = 7", ()=>{
    expect(calculator("3x2+1")).toBe(7);
})
test("3 x 2 / 2 = 3", ()=>{
    expect(calculator("3x2/2")).toBe(3);
})
test("2 x (1 + 2) x 2 = 6", ()=>{
    expect(calculator("2x(1+2)")).toBe(6);
})
test("2+3-5x5+6/2=17",()=>{
    expect(calculator("2+3-5x5+6/2")).toBe(-17);
})
test("(12 - 3) x 2 = 18", ()=>{ 
    expect(calculator("(12-3)x2")).toBe(18);
})