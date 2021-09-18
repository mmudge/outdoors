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
    before :each do
      stub_get_parks
    end

    it 'creates a Park' do
      expect { described_class.create_or_update_from_nps }.to change(Park, :count).by(1)
    end

    it "updates and existing Park if an existing one is foung by its 'code'" do
      create(:park, code: "yell")
      expect { described_class.create_or_update_from_nps }.to change(Park, :count).by(0)
    end


    it 'sets the correct attributes' do
      park_data = JSON.parse(File.read('spec/fixtures/nps_api/park.json'))

      described_class.create_or_update_from_nps
      park = Park.last

      expect(park.full_name).to eq(park_data['fullName'])
      expect(park.name).to eq(park_data['name'])
      expect(park.code).to eq(park_data['parkCode'])
      expect(park.description).to eq(park_data['description'])
      expect(park.park_type).to eq(park_data['type'])
      expect(park.directions).to eq(park_data['directionsInfo'])
      expect(park.directions_url).to eq(park_data['directionsUrl'])
      expect(park.external_id).to eq(park_data['id'])
      expect(park.url).to eq(park_data['url'])
      expect(park.weather).to eq(park_data['weatherInfo'])
      expect(park.addresses).to eq(park_data['addresses'])
      expect(park.phones).to eq(['3073447381', '3073442014', '3073442386'])
      expect(park.enterance_fees).to eq(park_data['enteranceFees'])
      expect(park.enterance_passes).to eq(park_data['enterancePasses'])
      expect(park.images_data).to eq(park_data['images'])
      expect(park.latitude).to eq(44.59824417)
      expect(park.longitude).to eq(-110.5471695)
      expect(park.hours).to eq(park_data['operatingHours'])
      expect(park.states).to eq(park_data['states'])
    end
  end
end
