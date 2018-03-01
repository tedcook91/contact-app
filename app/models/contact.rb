class Contact < ApplicationRecord

  validates_presence_of :firstName, :lastName, :emailAddress, :phoneNumber, :companyName

end
