import Comment from '@/models/comment'
import Tag from '@/models/tag'

class Link {
  id: String
  name: String
  comments: Comment[]
  tags: Tag[]
}
