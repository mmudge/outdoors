FactoryBot.define do
  factory :park do
    sequence(:code) { |n| n + 1 }
    full_name { 'myString' }
    name { 'myString' }
  end
end
