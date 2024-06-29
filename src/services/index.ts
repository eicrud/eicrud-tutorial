import { Comment } from './comment/comment.entity';
import { CommentService } from './comment/comment.service';
import { Article } from './article/article.entity';
import { ArticleService } from './article/article.service';
import { Email } from './email/email.entity';
import { EmailService } from './email/email.service';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';

//Auto generated file

export const CRUDServices = [
    CommentService,
    ArticleService,
    EmailService,
    UserService,
]

export const CRUDEntities = [
    Comment,
    Article,
    User,
]

