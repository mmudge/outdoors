require 'rails_helper'

RSpec.describe PagesController, type: :controller do

  def query
    <<~GQL
      query {
        parks {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    GQL
  end

  it 'executes a graphql query' do
    get :home, params: { query: query}

    puts response.body

    expect(response).to be_truthy
  end
end
