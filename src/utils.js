
// При вызове возвращает div с класом row.
export function row(content, styles = '') {
    const style = `margin: 0; ${styles}`
    return `<div class="row" style="${styles}">${content}</div>`
}

// При вызове возвращает div с класом col-sm.
export function col(content) {
    return `<div class="col-sm" style="text-align: center;">${content}</div>`
}

// Функция создаёт возможность записывать стили для блоков в формате 'ключ: значение', записывая их в объект. Ранее все стили записывались в одну строку, через запятую.
export function css(styles = {}) {
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}