import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/features/posts/postThunk'

export default function Home() {
  const dispatch = useDispatch()
  const { entities, loading } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>Blog Posts</h2>
      {entities.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}