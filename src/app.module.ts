import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './user/user.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [userModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
