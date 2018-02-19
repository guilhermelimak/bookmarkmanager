import Comment from '@/models/comment'
import Tag from '@/models/tag'

type Link = {
  id: String
  name: String
  comments: Comment[]
  tags: Tag[]
}
