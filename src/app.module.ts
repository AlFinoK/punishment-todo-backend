import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forRoot(
			'mongodb+srv://nikitamalashkin73_db_user:cK01mFki6h9HF7CV@punishment-cluster.nplsx2u.mongodb.net/?retryWrites=true&w=majority&appName=punishment-cluster',
		),
		TasksModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
