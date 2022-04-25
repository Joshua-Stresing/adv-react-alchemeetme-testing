import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)
  screen.debug()

  const name = screen.getByText('Vonta')
  // checking
  expect(name).toHaveTextContent('Vonta')

  const motto = screen.getByText('Res Non Verba')
  // check find vs get
  const interests = screen.findByText('Interests')

  const img = screen.findByAltText('avatar')

  const header = screen.findByAltText('header')

  user.likes.forEach((item) => screen.getByText(`${item}`))

  screen.debug(img)
})
