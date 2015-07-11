# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# rake db:seed
Trademak.create()
Member.create(username:"admin", password:"admin123",fullname:"Hoang van Kien",email:"hoangkien.hy91@gmail.com",address:"Hưng Yên", gender:"1",role:1)


