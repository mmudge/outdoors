require 'rails_helper'

RSpec.describe Park, type: :model do
  context 'Validations' do
    it { should validate_uniqueness_of(:code) }
  end

  def stub_get_parks
    response = JSON.parse(File.read('spec/fixtures/nps_api/park.json'))
    allow_any_instance_of(NpsApi).to receive(:get_parks).and_return([response])
  end

  context '#create_or_update_parks_from_nps' do
    it 'creates a Park' do
      stub_get_parks

      expect { described_class.create_or_update_from_nps }.to change(Park, :count).by(1)
    end
  end
end
