import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: ['https://punishment-todo.vercel.app', 'http://localhost:4200'],
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
		credentials: true,
	});

	app.setGlobalPrefix('api');
	await app.listen(process.env.PORT || 5000, '0.0.0.0');
}
bootstrap();
