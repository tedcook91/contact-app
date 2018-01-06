class ContactsController < ApplicationController

  def index
    @contacts = Contact.all
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      notice: 'Contact was successfully created.'
    else
      render action: 'new'
    end
  end

  def destroy
    @contact.destroy
  end

  def contact_params
    params.require(:contact).permit(:firstName, :lastName, :emailAddress, :phoneNumber, :companyName)
  end
end
