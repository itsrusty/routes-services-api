import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';
import { AdminModule } from './admin/admin.module';
import { AdminController } from './admin/admin.controller';
import { EmployeesController } from './employees/employees.controller';
import { AuthController } from './auth/auth.controller';
import { AdminService } from './admin/admin.service';
import { EmployeesService } from './employees/employees.service';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';
import { Cachemodule } from './cache/cache.module';
// import { CacheModule } from '@nestjs/cache-manager';
// import * as store from "cache-manager-redis-store"

@Module({
  imports: [
    // CacheModule.register({ store: store.redisStore }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: 'postgres',
      password: process.env.DATABASE_PASSWORD,
      database: "postgres",
      autoLoadEntities: true,
      entities: [Employee],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Employee]),

    AdminModule,
    EmployeesModule,
    AuthModule,
    Cachemodule,
  ],
  controllers: [AdminController, EmployeesController, AuthController],
  providers: [AdminService, EmployeesService, AuthService],
})
export class AppModule {}
