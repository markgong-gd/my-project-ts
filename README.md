### 引入typescript

- 这里采用babel编译typescript, typescript只做了类型检查, 如果是新项目不使用babel，可以使用ts-loader做语言编译
```sh
    npm install --save-dev typescript
    npm install --save-dev @babel/preset-typescript
```
```json
    {
        "presets": [
            ...
            "@babel/preset-typescript"
        ]
    }
```
```json
    {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es5",
            "lib": ["es6", "dom"],
            "sourceMap": true,
            "allowJs": true,
            "jsx": "react",
            "moduleResolution": "node",
            "rootDir": "src",
            "noImplicitReturns": true,
            "noImplicitThis": true,
            "noImplicitAny": true,
            "strictNullChecks": true,
            "noEmit": true,
            "esModuleInterop": true
        },
        "exclude": [
            "node_modules",
            "build/*",
            "scripts",
            "acceptance-tests",
            "webpack",
            "jest",
            "src/setupTests.ts"
        ],
        "types": [
            "typePatches"
        ]
    }
```