FactoryBot.define do
  factory :park do
    full_name { 'myString' }
    name { 'myString' }
    sequence(:code) { |n| n + 1 }
    description { 'myString' }
    park_type { 'myString' }
    directions { 'myString' }
    directions_url { 'myString' }
    external_id { 'myString' }
    url { 'myString' }
    weather { 'myString' }
    addresses { nil }
    phones { nil }
    entrance_fees { nil }
    entrance_passes { nil }
    images_data { nil }
    latitude { nil }
    longitude { nil }
    hours { nil }
    states { nil }
  end
end
