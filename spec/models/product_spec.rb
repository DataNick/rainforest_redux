require 'rails_helper'

# we use "describe <class>" to start writing tests
describe Product do
  # Arrange necessary preconditions and inputs
  let!(:product) { build(:product) }

  # we then write examples (specifications) in our describe block using an it-do-end syntax
  # Example spec:
  it "must have a name" do
    # we instantiate a product object and assign it to "product"

    ## we can use "should" to expect a value
    expect(product.name).to be_nil

    #be_valid runs the predicate matcher be_valid which is going to call the ActiveRecord valid? method
    expect(product).to_not be_valid
  end
end