# Heladeria App - React Native

Una aplicación de comercio electrónico desarrollada con React Native que ofrece una experiencia de compra completa y fácil de usar.

## Funcionalidades Principales

### Pantalla de Cuenta

- **Acceso seguro:** Solo los usuarios autenticados pueden acceder a la pantalla de perfil y realizar compras.
- **Información del usuario:** Muestra detalles del usuario, como nombre y dirección.

<img src="./src/screenshot/Home.png" width="300" >
<img src="./src/screenshot/Register.png" width="300" >

### Autenticación con Firebase

- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios, como asi tambien el logueo con Google y Facebook.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

### Pantalla de Categorías

- Muestra una selección de categorías en tarjetas.
- Al hacer clic en una categoría, se navega a la pantalla de productos correspondiente.

### Pantalla de Productos

- Lista todos los productos en tarjetas con nombre y foto.
- Incluye un buscador para filtrar productos por nombre.
- Al hacer clic en un producto, se navega a la pantalla de detalles del producto.

### Pantalla de Detalles del Producto

- Proporciona una descripción detallada del producto.
- Muestra el precio y el stock disponible.
- Permite agregar el producto al carrito.

<img src="./src/screenshot/categories.png" width="300" >
<img src="./src/screenshot/productCategory.png" width="300" >
<img src="./src/screenshot/productDetail.png" width="300" >

### Navegación Inferior

```Javascript
        const TabNavigator = ({portrait}) => {
    
  return (
    
            <Tab.Navigator
            initialRouteName='ShopStack'
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle: [styles.tabBar, !portrait && styles.tabBarLandScape]

            }}>
                
                <Tab.Screen
                name='ShopStack'
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => 
                    <TabBarIcon title="Productos" nameIcon="home" focused={focused}/>
                }}
                />
                <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Carrito" nameIcon="shopping-cart" focused={focused}/>
                    }}

                />
                <Tab.Screen 
                    name='OrdersStack' 
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Ordenes" nameIcon="list" focused={focused}/>
                    }}
                />
                <Tab.Screen 
                    name='ProfileStack' 
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Perfil" nameIcon="user" focused={focused}/>
                    }}
                />
           </Tab.Navigator>
  )
}

```

- **Pestaña 1 - Productos:** Categorías y productos (stack principal).
- **Pestaña 2 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.
- **Pestaña 3 - Órdenes:** Historial de órdenes realizadas.
- **Pestaña 4 - Perfil:** Información del usuario, deslogueo y carga de imagen de perfil.

<img src="./src/screenshot/cart.png" width="300" >
<img src="./src/screenshot/orders.png" width="300" >
<img src="./src/screenshot/profile.png" width="300" >

## Tecnologías Utilizadas

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clona el repositorio: `git clone https://github.com/Stefano-Scozziero/coder-e_commerce.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`

## Contacto

Para preguntas o soporte, contacta a scozzierostefano@gmail.com.