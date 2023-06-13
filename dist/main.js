"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'src/public'), {
        maxAge: process.env.NODE_ENV == 'production' ? '7d' : '1m',
    });
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'src/public'));
    app.setViewEngine('ejs');
    const port = process.env.PORT || 8080;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map