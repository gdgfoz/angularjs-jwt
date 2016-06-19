Instalação
============================

## Clone o projeto
```
git clone https://github.com/gdgfoz/angularjs-jwt.git server-jwt
```  

## Iniciando o server  

```  
cd server-jwt
composer install
php artisan migrate --seed
php artisan serve
```   
## Iniciando webapp
> Dentro da pasta do projeto, encontra-se uma pasta do webapp, a partir da raiz do projeto execute os seguintes  comandos.

### Para logar no APP, utilize:
*Login:* demo@demo.com  
*Senha:* demo


```
cd webapp
bower install
npm install
gulp serve
```

### Para gerar um build da aplicação
```
gulp build
```   

Mais informações sobre as ferramentas utilizadas:

- https://getcomposer.org/doc/00-intro.md
- https://docs.npmjs.com/getting-started/installing-node
- https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
- https://github.com/Swiip/generator-gulp-angular
