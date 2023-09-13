# grievance-redressal-system


# auth routes 
POST /api/v1/auth/signup -> { firstName, lastName, email, contactNumber, password }; { token }
POST /api/v1/auth/signin -> { email, password }; { token }

# user routes
GET /api/v1/user/:userId/profile -> { firstName, lastName, email, contactNumber }

# nlp routes
POST /api/v1/nlp/listen -> { userInfo, complaintText }; 
                           { departmentId, department, complaintSpecificRequirementslist(use this to create a JSON for complaint)} 

# department auth routes
POST /api/v1/:department/admin/auth/signup -> { firstName, lastName, email, contactNumber }; { token}
POST /api/v1/:department/admin/auth/signin -> { email, password }; { token }

# department routes
GET /api/v1/:department/admin/dashboard -> { all complaints by department }

# complaints routes
POST /api/v1/complaints/send -> { send complaints to concerned department }; 
                                { departmentId, department, comaplainant: userInfoJSONObject(fullName, email, contactNumber), 
                                complainantComplaintSpecificeInfo: JSONObject(given by nlm) }

# welcome routes
GET /api/v1/ -> { greet message( not for frontend)}



