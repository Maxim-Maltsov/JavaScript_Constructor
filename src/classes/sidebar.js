
import {TitleBlock, TextBlock} from './blocks.js'

export class Sidebar {

    constructor(selector, update) {

        this.$el = document.querySelector(selector)
        this.update = update

        this.init()
    }

    init() {

        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template
    }

    get template() {

        return [
            block('Заголовок'),
            block('Текст')
        ].join('')        
    }

    addBlock(event) {

        event.preventDefault() // Отключает перезагрузку страницы происходящую при нажатии на кнопку "Добавить".
        
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const Constructor = type === 'text'? TextBlock : TitleBlock
        
        const newBlock = new Constructor(value, {styles})
        this.update(newBlock)
        
        event.target.value.value = ''
        event.target.styles.value = ''
    }

}

function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="Введите текст">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="Опишите CSS стили">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form>
        <hr />
    `
}
