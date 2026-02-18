<!DOCTYPE html>
<html>
<head>
    <title>CUSTOM</title>
</head>
<body>
<h1>Кастом</h1>


<form action="/customer/add_with_custom" method="post" enctype="multipart/form-data">
    Никнейм в Телеграмм: <input type="text" name="userName" /><br><br>
    Описание кастома: <input type="text" name="description"/><br><br>
    Первая фотография: <input type="file" name="file1"/><br><br>
    Вторая фотография: <input type="file" name="file2"/><br><br>
    Третья фотография: <input type="file" name="file3"/><br><br>
    Четвёртая фотография: <input type="file" name="file4"/><br><br>
    Пятая фотография: <input type="file" name="file5"/><br><br>
    <input type="submit" value="Загрузить">
</form>

    Продукты в корзину
    <form action="/customer/add_with_products" method="post">
        Никнейм в Телеграмм: <input type="text" name="userName" /><br><br>
        <ul>
            <#list products as product>
            <li>
                <input type="checkbox" id="${product.id}" name="selectedProducts" value="${product.id}" />
                <label for="${product.id}">${product.title}</label>
                <img src="/images/${product.images[0].id}" height="60px"/><br><br>
            </li>
            </#list>
        </ul>
        <button type="submit">Добавить в корзину</button>
    </form>
<#if customers?has_content>
<p>Атрибут `customers` существует</p>
<#list customers as customer>
    <div>
        <p><b>${customer.userName}</b>. | <a href="/customer/${customer.id}">Подробнее...</a></p>
    </div>
    <#else>
    <h3>Пока заказчиков нет</h3>
</#list>
<#else>
<p>Атрибут `customers` не существует</p>
    <hr>
</#if>

</body>
</html>