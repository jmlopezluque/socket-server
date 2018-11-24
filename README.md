# Socket-Server

Reconstruir los modulos de Node
```
npm install
``` 

Inicialización de TypeScript
```
tsc -init
```

Generar la caperta dist, una vez modificacdo el fichero tsconfig.json, la directiva outdir
``` 
tsc -w
```

Lenvatamos el servidor cualquiera de esto dos comandos
```  
nodemon dist/
node dist/
```  

Creamos un fichero .gitignore para poner las capertas o archivos que no queremos subir al repositorio GIT

Comandos de git
``` 
git init (inicializamos git)
git status
git add . (añadimos todos los archivos para realizar un commit, podemos verlo otra vez con git status)
git commit -m "descripción que queramos poner"
git remote add origin https://migithub/mirepositorio
git push -u origin master 
git tag -a v1.0.0 -m "Descripción de la version" (Esto es para añadir una tag de la versión)
git push --tags (esto es para que suba a github)
```  
