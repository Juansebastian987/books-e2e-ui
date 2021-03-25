# books-e2e-ui
# To run it we give it in npm run test:e2e:ui
# The tests are located in the folder cypres -> integration -> examples -> e2e -> specs
#
# Create-Book:
# In this case what we do is to create a user and then in the table we check that the element has been added 
#
# Create-Book-Negative:
# In this case what we do is to create an empty user and then in the table we check that the element does not 
# exist. 
#
# Delete-Book:
# In this case the first element of the table is searched and its name is saved, it is deleted and what is expected 
# is that the name to be searched does not exist.
#
# Delete-Book-Negative:
# In this case the second element of the table is searched and its name is saved, it is eliminated and what is 
# expected is that the name to be searched exists since the one that was eliminated was another element.
#
# Read-Book:
# What we do in this test is to create an element and verify that it reads correctly its attributes, we also verify 
# that it reads correctly the attributes of all elements.
#
# Read-Book-Negative:
# What we do in this case is to verify if there is a single value of the table, in this case it should return 0 
# since there is no repeated data.
#
# Update-Book:
# In this test we change the name and author of an element and verify that the change has been made correctly (its 
# name should be the one we have entered).
#
# Update-Book-Negative:
# In this test we change the name and author to an element and leave it empty and verify that the change has been 
# done correctly (its name should be non-null and therefore it should have a name associated to it).
#