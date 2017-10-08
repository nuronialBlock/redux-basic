import * as actions from './index'

test('addTodo should create ADD_TODO action', () => {
  expect(actions.addTodo('Use Redux')).toEqual({
    type: 'ADD_TODO',
    id: 0,
    text: 'Use Redux'
  })
  expect(actions.setVisibilityFilter('active')).toEqual({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'active'
  })
  expect(actions.toggleTodo(1)).toEqual({
    type: 'TOGGLE_TODO',
    id: 1
  })
})
