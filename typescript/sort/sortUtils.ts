
// 升序
export function compareAsc(a: number, b: number): boolean {
    return a - b > 0
}
// 降序
export function compareDesc(a: number, b: number): boolean {
    return b - a > 0
}


export function swap<T>(arr: T[], i: number, j: number): void {
    if (i === j) return
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

/**
 * 
 * @param size 数组长度
 * @param min 随机数最小值
 * @param max 随机数最大值
 * @returns 
 */
export function randomArray(size: number, min: number, max: number): number[] {
    const arr = new Array(size)
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min) + min)
    }
    return arr
}

/**
 * 数组是否升序排列
 * @param arr 数组
 * @returns 
 */
export function isAscArray(arr: number[]): boolean {
    if (!Array.isArray(arr)) return false
    return arr.every((item, index) => {
        return index === 0 || item >= arr[index - 1]
    })
}



/**
 * 数组是否降序排列
 * @param arr 数组
 * @returns 
 */
export function isDescArray(arr: number[]): boolean {
    if (!Array.isArray(arr)) return false
    return arr.every((item, index) => {
        return index === 0 || item <= arr[index - 1]
    })
}