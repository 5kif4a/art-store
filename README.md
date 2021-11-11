# Тестовое задание Frontend-разработчик - Duke Technologies

### [Demo](https://duke-art-store.web.app/) - Deployed on Firebase Hosting

### Stack:
- React
- SCSS
- fetch polyfill
- cslx (classnames alternative)
- create-react-app (webpack already configured)

## Task

Необходимо сверстать макет страницы интернет-магазина:

[https://www.figma.com/file/p8lLQkKB3e9LbUtzeygIBk/duketech-front?node-id=0%3A1](https://www.figma.com/file/p8lLQkKB3e9LbUtzeygIBk/duketech-front?node-id=0%3A1)

<aside>
💡 Для доступа к макету необходимо зарегистрироваться в Фигме и зайти под своим логином

</aside>

## Технические требования:

- Для соискателей, желающих показать свои знания современных библиотек/фреймворков (vue/react/angular): мы в компании используем **vue.js. v2.x.** но можете использовать React.
- Верстка должна максимально соответствовать предоставленному макету и ui-киту. **Желательно PixelPerfect.** **Адаптив делать не нужно.**
- Результат должен корректно отображаться во всех популярных браузерах, **включая IE 11 версии** при разрешении экрана 1200px и выше
- При работе над заданием **обязательно** использование средств автоматизации (**webpack** или **gulp**). Конфигурацию мы не предоставляем.
- **Обязательно использование scss** при выполнении тестового задания (именно scss, не sass)
- **Запрещено использовать css-фреймворки (bootstrap, foundation и т.д.)**

### **Кнопка “купить” должна реализовывать следующий функционал:**

1. по ее нажатию **должен отправляться ajax запрос методом get** по адресу [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1) или [https://reqres.in/api/products/3](https://reqres.in/api/products/3)
2. На время выполнения запроса вместо надписи “купить” **должен появляться лоадер**. Внешний вид лоадера необходимо продумать самостоятельно
3. После удачного запроса **внешний вид кнопки должен менять состояние**: “в корзине”
4. **После перезагрузки страницы состояния товаров (в корзине он или нет) должно сохраняться**
5. Для запросов к серверу использовать **fetch** или **axios.** Не забудьте про поддержку IE11

- **Результат нужно оформить в виде git-репозитория** на github/bitbucket.

В репозитории должны быть: **исходный код, конфигурация для webpack/gulp (если был использован) + собранная верстка.**

Никакого лишнего кода: предыдущих работ, макетов и т.п. в репозитории быть не должно
