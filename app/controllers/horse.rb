get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new
  erb :"/horses/new"
end

post "/_new_horse" do
    @horse = Horse.new
    erb :"/horses/_new_horse", layout: false, locals: { horse: @horse }
end

post '/horses' do
  @horse = Horse.create(params[:horse])
  if request.xhr? && @horse.valid?
    erb :"/horses/_horse", layout: false, locals: { horse: @horse }
  elsif !request.xhr? && @horse.valid?
    erb :"/horses/show"
  end
end

get '/horses/:id' do
  @horse = Horse.find(params[:id])
  if request.xhr?
    erb :"/horses/_horse_details", layout: false, locals: { horse: @horse }
  else
    erb :"/horses/show"
  end
end
